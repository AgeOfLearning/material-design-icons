import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneGradeElement
 * @class IconTwotoneGradeElement
 * @extends {AoflElement}
 */
class IconTwotoneGradeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneGradeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-grade';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneGradeElement.is, IconTwotoneGradeElement);

export default IconTwotoneGradeElement;
