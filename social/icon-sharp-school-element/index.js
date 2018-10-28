import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSchoolElement
 * @class IconSharpSchoolElement
 * @extends {AoflElement}
 */
class IconSharpSchoolElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSchoolElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-school';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSchoolElement.is, IconSharpSchoolElement);

export default IconSharpSchoolElement;
