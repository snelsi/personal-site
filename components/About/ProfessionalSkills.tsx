import * as React from "react";

interface ProfessionalSkillsProps {}

export const ProfessionalSkills: React.FC<ProfessionalSkillsProps> = () => (
  <div className="block">
    <h6>Профессиональные навыки:</h6>
    <ul>
      <li>Разработка сайтов и веб-приложений</li>
      <li>Техническое проектирование</li>
      <li>Реализация и тестирование внутренней логики</li>
      <li>Системный интелектуальный анализ</li>
      <li>Проектирование баз данных</li>
      <li>Создание интерфейсов</li>
    </ul>
  </div>
);
