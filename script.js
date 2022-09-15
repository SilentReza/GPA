const GPA = new Vue({
    el: ".GPA",
    data() {
        return {
            // datas //
            userLesson: '',
            userScore: '',
            userGpa: '',
            allLesson: [{ lesson: "Discipline", score: "20" }],
        }
    },
    methods: {
        // add and compute result //
        addLesson() {
            this.allLesson.push({ lesson: this.userLesson, score: this.userScore });
        }
    },
    computed: {
        addGpa() {
            var result = 0;
            for (var i = 0; i < this.allLesson.length; i++) {
                result += parseFloat(this.allLesson[i].score);
            }
            this.userGpa = result / this.allLesson.length
            return this.userGpa.toFixed(2);
        }
    }
})

// btn disbled control //
document.addEventListener('DOMContentLoaded', function () {
    var getScore = document.getElementById('user-score');
    document.getElementById('btn-submit').disabled = true;
    if (GPA.userScore == "", GPA.userLesson == "") {
        document.getElementById('btn-submit').disabled = true;
    }
    getScore.addEventListener('change', function () {
        if (GPA.userLesson != '') {
            document.getElementById('btn-submit').disabled = false;
        }
    })
})
