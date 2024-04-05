CREATE TABLE posts (
  post_id INT AUTO_INCREMENT PRIMARY KEY,
  post_title VARCHAR(255) NOT NULL,
  post_content TEXT NOT NULL,
  posted_on DATETIME NOT NULL
);

CREATE TABLE components (
  component_id INT AUTO_INCREMENT PRIMARY KEY,
  component_type VARCHAR(50) NOT NULL,
  component_content TEXT NOT NULL,
component_order INT NOT NULL
);