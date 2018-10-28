import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineGradeElement
 * @class IconOutlineGradeElement
 * @extends {AoflElement}
 */
class IconOutlineGradeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineGradeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-grade';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineGradeElement.is, IconOutlineGradeElement);

export default IconOutlineGradeElement;
