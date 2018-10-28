import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSubjectElement
 * @class IconOutlineSubjectElement
 * @extends {AoflElement}
 */
class IconOutlineSubjectElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSubjectElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-subject';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSubjectElement.is, IconOutlineSubjectElement);

export default IconOutlineSubjectElement;
