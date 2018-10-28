import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSchoolElement
 * @class IconTwotoneSchoolElement
 * @extends {AoflElement}
 */
class IconTwotoneSchoolElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSchoolElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-school';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSchoolElement.is, IconTwotoneSchoolElement);

export default IconTwotoneSchoolElement;
