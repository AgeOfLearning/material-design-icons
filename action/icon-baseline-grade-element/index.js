import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineGradeElement
 * @class IconBaselineGradeElement
 * @extends {AoflElement}
 */
class IconBaselineGradeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineGradeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-grade';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineGradeElement.is, IconBaselineGradeElement);

export default IconBaselineGradeElement;
