import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSubjectElement
 * @class IconSharpSubjectElement
 * @extends {AoflElement}
 */
class IconSharpSubjectElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSubjectElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-subject';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSubjectElement.is, IconSharpSubjectElement);

export default IconSharpSubjectElement;
