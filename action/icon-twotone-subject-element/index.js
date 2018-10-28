import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSubjectElement
 * @class IconTwotoneSubjectElement
 * @extends {AoflElement}
 */
class IconTwotoneSubjectElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSubjectElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-subject';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSubjectElement.is, IconTwotoneSubjectElement);

export default IconTwotoneSubjectElement;
