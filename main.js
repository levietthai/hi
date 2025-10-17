// Lấy các phần tử HTML cần thiết
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Mảng chứa tất cả 40 câu hỏi và đáp án từ file của bạn
const questions = [
    {
        question: "Đâu là một nhân tố phụ thuộc trong ảo hóa của điện toán đám mây?",
        answers: [
            { text: "Nhiều ứng dụng cùng chạy trên một server.", correct: false },
            { text: "Tất cả đáp án đều sai", correct: false },
            { text: "Tất cả đáp án đều đúng", correct: false },
            { text: "Nhiều hệ điều hành cùng chạy trên một máy chủ vật lý.", correct: true }
        ]
    },
    {
        question: "Đặc trưng chính của NOSQL là",
        answers: [
            { text: "Tất cả đáp án đều sai", correct: false },
            { text: "Kết hợp nhiều bảng với nhau thành một bản", correct: false },
            { text: "Tổ chức dữ liệu theo file dữ liệu", correct: false },
            { text: "Không tổ chức dữ liệu dưới dạng bảng", correct: true }
        ]
    },
    {
        question: "Đâu là ưu điểm của điện toán đám mây?",
        answers: [
            { text: "Tốc độ chấp nhận được", correct: false },
            { text: "Tiết kiệm tài nguyên, chi phí", correct: true },
            { text: "Độ tin cậy tuyệt đối", correct: false },
            { text: "Tất cả đáp án đều sai", correct: false }
        ]
    },
    {
        question: "Đâu là một ưu điểm của mô hình Amazon S3?",
        answers: [
            { text: "Thuật toán truy vấn cực nhanh", correct: false },
            { text: "Tất cả đáp án đều sai", correct: false },
            { text: "Độ tin cậy cao", correct: true },
            { text: "Đội ngủ chuyên gia hỗ trợ nhiều kinh nghiệm", correct: false }
        ]
    },
    {
        question: "Đâu là một nhược điểm của mô hình OpenStack Swift?",
        answers: [
            { text: "Đòi hỏi chuyên gia hỗ trợ nhiều kinh nghiệm", correct: true },
            { text: "Tất cả đáp án đều sai", correct: false },
            { text: "Phân hóa nhiều mức độ", correct: false },
            { text: "Khả năng tương thích thông qua phần cứng", correct: false }
        ]
    },
    {
        question: "Đâu là một đặc điểm của các cấu trúc NOSQL?",
        answers: [
            { text: "Key / value.", correct: true },
            { text: "Hướng giá trị số", correct: false },
            { text: "Cơ sở dữ liệu đồ thị", correct: false },
            { text: "Tất cả đáp án đều sai", correct: false }
        ]
    },
    {
        question: "Đâu là lợi ích của các dịch vụ đám mây?",
        answers: [
            { text: "Tất cả đáp án đều sai", correct: false },
            { text: "Tự động nhập liệu", correct: false },
            { text: "Cải tiến quy trình", correct: true },
            { text: "Phân tán công việc", correct: false }
        ]
    },
    {
        question: "Đâu là một nhóm của các tổ chức NOSQL?",
        answers: [
            { text: "Key - value", correct: true },
            { text: "Hướng giá trị số", correct: false },
            { text: "Cơ sở dữ liệu đồ thị", correct: false },
            { text: "Tất cả đáp án đều sai", correct: false }
        ]
    },
    {
        question: "RedHat cung cấp dịch vụ?",
        answers: [
            { text: "Phần mềm", correct: false },
            { text: "Hạ tầng", correct: false },
            { text: "Nền tảng", correct: true },
            { text: "Tất cả đáp án đều đúng", correct: false }
        ]
    },
    {
        question: "đâu là một yếu tố của an toàn các dịch vụ iaas?",
        answers: [
            { text: "Nhiều mạng đụng độ", correct: false },
            { text: "Kho ảnh máy công cộng", correct: true },
            { text: "Tất cả đáp án đều sai", correct: false },
            { text: "Phần cứng không tương thích", correct: false }
        ]
    },
    {
        question: "Công nghệ ảo hóa là việc",
        answers: [
            { text: "Kết hợp nhiều máy client thành một máy chung", correct: false },
            { text: "Tất cả đáp án đều đúng", correct: false },
            { text: "Kết hợp nhiều mạng thành mạng WAN", correct: false },
            { text: "Phân chia một máy chủ thành nhiều máy ảo", correct: true }
        ]
    },
    {
        question: "Đâu là một lỗ hổng liên quan đến máy chủ ảo?",
        answers: [
            { text: "Được vá lỗi", correct: false },
            { text: "Tất cả đáp án đều sai", correct: false },
            { text: "Vị trí lưu trữ xác định", correct: false },
            { text: "Không thể được vá lỗi", correct: true }
        ]
    },
    {
        question: "Đâu là một lỗ hổng liên quan đến dữ liệu?",
        answers: [
            { text: "Dữ liệu lưu trữ không mã hóa", correct: true },
            { text: "Vị trí lưu trữ xác định", correct: false },
            { text: "Tất cả đáp án đều sai", correct: false },
            { text: "Vị trí lưu trữ phân tán", correct: false }
        ]
    },
    {
        question: "Đâu là một yếu tố của an toàn các dịch vụ IaaS?",
        answers: [
            { text: "Người thuê đồng thời", correct: true },
            { text: "Ảo hóa", correct: false },
            { text: "Truy cập không đúng thời", correct: false },
            { text: "Tất cả đáp án điều sai", correct: false }
        ]
    },
    {
        question: "Đâu là một đặc điểm của điện toán đám mây?",
        answers: [
            { text: "Truy cập hạn chế", correct: false },
            { text: "Có khả năng đo lường", correct: true },
            { text: "Tất cả đáp án đều sai", correct: false },
            { text: "Thỉnh thoảng có thể mất liên lạc", correct: false }
        ]
    },
    {
        question: "một trung tâm dữ liệu dưới dạng cơ bản có mấy tầng?",
        answers: [
            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: false },
            { text: "3", correct: true }
        ]
    },
    {
        question: "đâu là lợi ít của SQL azure ?",
        answers: [
            { text: "Tích hợp NOSQL", correct: false },
            { text: "Chi phí thấp", correct: false },
            { text: "Tối thiểu dung lượng", correct: false },
            { text: "Tối đa tính sẵn sàng", correct: true }
        ]
    },
    {
        question: "Đâu là một yếu tố của an toàn các dịch vụ IaaS",
        answers: [
            { text: "Giám sát máy ảo", correct: true },
            { text: "Phần cứng không tương thích", correct: false },
            { text: "Truy cập không đồng thời", correct: false },
            { text: "Tất cả các đáp án đều sai", correct: false }
        ]
    },
    {
        question: "Đâu là một nhân tố phụ thuộc trong ảo hoá của điện toán đám mây?",
        answers: [
            { text: "Khả năng cấu hình thấp", correct: false },
            { text: "Nhiều hệ điều hành cùng chạy trên một máy chủ vật lý", correct: true },
            { text: "Tất cả đáp án đều sai", correct: false },
            { text: "Khả năng sẵn sàng ứng dụng cao", correct: false }
        ]
    },
    {
        question: "amazon thương mại hóa điện toán đám mây năm",
        answers: [
            { text: "2000", correct: false },
            { text: "2006", correct: true },
            { text: "2005", correct: false },
            { text: "200?", correct: false }
        ]
    },
    {
        question: "đâu là thành phần của apps fabric?",
        answers: [
            { text: "Software config", correct: false },
            { text: "Access control", correct: true },
            { text: "Không có đáp án nào đúng", correct: false },
            { text: "Dòng lệnh", correct: false }
        ]
    },
    {
        question: "Vấn đề nào ít được quan tâm nhất trong công nghệ đám mây?",
        answers: [
            { text: "Công nghệ triển khai", correct: true },
            { text: "Chi phí vận hành", correct: false },
            { text: "An toàn bảo mật", correct: false },
            { text: "Không đủ khả năng điều sai", correct: false }
        ]
    },
    {
        question: "apps fabric có mấy thành phần chính?",
        answers: [
            { text: "5", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "2", correct: true }
        ]
    },
    {
        question: "Đâu là một lỗ hổng của dữ liệu trong mạng ảo",
        answers: [
            { text: "Phân tán dữ liệu", correct: false },
            { text: "Mất dữ liệu do sao chép", correct: true },
            { text: "Tất cả đáp án đều sai", correct: false },
            { text: "Dữ liệu không được cập nhật", correct: false }
        ]
    },
    {
        question: "Đâu không phải là một đặc điểm của điện toán đám mây?",
        answers: [
            { text: "Tự phục vụ theo yêu cầu", correct: false },
            { text: "Truy cập rộng rãi", correct: false },
            { text: "Truy cập không liên tục", correct: true },
            { text: "Tất cả đáp án điều sai", correct: false }
        ]
    },
    {
        question: "MongoDB là NOSQL dạng",
        answers: [
            { text: "Hướng văn bản", correct: true },
            { text: "Key/Value", correct: false },
            { text: "Hệ cột", correct: false },
            { text: "Đồ thị", correct: false }
        ]
    },
    {
        question: "M13 xuất hiện tại khu vực nào của trung tâm dữ liệu lớn?",
        answers: [
            { text: "Phân phối ngang", correct: false },
            { text: "Tất cả đáp án điều sai", correct: false },
            { text: "Phân phối thiết bị", correct: false },
            { text: "Phân phối chính", correct: true }
        ]
    },
    {
        question: "Amazon Redshift là NOSQL dạng",
        answers: [
            { text: "Hướng văn bản", correct: false },
            { text: "Key/Value", correct: false },
            { text: "Hệ cột", correct: true },
            { text: "Đồ thị", correct: false }
        ]
    },
    {
        question: "Đâu không phải là nhược điểm của điện toán đám mây?",
        answers: [
            { text: "Tất cả đáp án điều sai", correct: false },
            { text: "độ tin cậy không cao", correct: false },
            { text: "Phụ thuộc vào nhà cung cấp", correct: false },
            { text: "Tiết kiệm", correct: true }
        ]
    },
    {
        question: "Neo4j là NOSQL dạng",
        answers: [
            { text: "Đồ thị", correct: true },
            { text: "Hệ cột", correct: false },
            { text: "Hướng văn bản", correct: false },
            { text: "Key/Value", correct: false }
        ]
    },
    {
        question: "Vấn đề nào được quan tâm đứng thứ hai trong điện toán đám mây?",
        answers: [
            { text: "An toàn và bảo mật", correct: false },
            { text: "Công nghệ triển khai", correct: false },
            { text: "Chi phí vận hành", correct: true },
            { text: "Độ khả dụng", correct: false }
        ]
    },
    {
        question: "LAN xuất hiện tại khu vực nào của trung tâm dữ liệu lớn?",
        answers: [
            { text: "Phân phối ngang", correct: false },
            { text: "Phân phối thiết bị", correct: true },
            { text: "Các phòng hỗ trợ", correct: false },
            { text: "Tất cả đáp án điều sai", correct: false }
        ]
    },
    {
        question: "Đối với SaaS thì ai là người dùng chủ yếu?",
        answers: [
            { text: "Tester", correct: false },
            { text: "Người sử dụng phần mềm", correct: true },
            { text: "Nhà phát triển ứng dụng", correct: false },
            { text: "Tất cả đáp án đều đúng", correct: false }
        ]
    },
    {
        question: "HBase là NOSQL dạng",
        answers: [
            { text: "Hệ cột", correct: true },
            { text: "Key/Value", correct: false },
            { text: "Tất cả đáp án đều sai", correct: false },
            { text: "Đồ thị", correct: false }
        ]
    },
    {
        question: "Chứng nhận SOC phát hành năm",
        answers: [
            { text: "2012", correct: false },
            { text: "2010", correct: false },
            { text: "2011", correct: true },
            { text: "2015", correct: false }
        ]
    },
    {
        question: "Google Drive và OneDrive là một loại dịch vụ",
        answers: [
            { text: "SaaS", correct: true },
            { text: "Tất cả đáp án đều sai", correct: false },
            { text: "PaaS", correct: false },
            { text: "IaaS", correct: false }
        ]
    },
    {
        question: "Dịch vụ nào sau đây là dịch vụ của điện toán đám mây phổ biến?",
        answers: [
            { text: "IaaS (Hạ tầng như một dịch vụ)", correct: false },
            { text: "PaaS (Nền tảng như một dịch vụ)", correct: false },
            { text: "SaaS (Phần mềm như một dịch vụ)", correct: false },
            { text: "Tất cả các đáp án trên", correct: true }
        ]
    },
    {
        question: "MISA là một dạng",
        answers: [
            { text: "Hạ tầng hướng dịch vụ", correct: false },
            { text: "Nền tảng hướng dịch vụ", correct: false },
            { text: "Phần mềm hướng dịch vụ", correct: true },
            { text: "Phân tích hướng dịch vụ", correct: false }
        ]
    },
    {
        question: "Đâu không phải là yếu tố của an toàn các dịch vụ IaaS?",
        answers: [
            { text: "Phục hồi máy ảo", correct: false },
            { text: "Giám sát máy ảo", correct: false },
            { text: "Vòng đời ứng dụng", correct: true },
            { text: "Tất cả đáp án đều sai", correct: false }
        ]
    },
    {
        question: "GoogleDrive là NOSQL dạng",
        answers: [
            { text: "Hướng văn bản", correct: false },
            { text: "Key/Value", correct: false },
            { text: "Hệ cột", correct: false },
            { text: "Không phải", correct: true }
        ]
    }
];


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Tiếp theo";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // Hiển thị đáp án đúng nếu chọn sai
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true; // Vô hiệu hóa các nút sau khi chọn
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Bạn đã trả lời đúng ${score} trên ${questions.length} câu!`;
    nextButton.innerHTML = "Chơi lại";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

// Bắt đầu trò chơi khi tải trang
startQuiz();