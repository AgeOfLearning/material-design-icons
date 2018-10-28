import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpIndeterminateCheckBoxElement
 * @class IconSharpIndeterminateCheckBoxElement
 * @extends {AoflElement}
 */
class IconSharpIndeterminateCheckBoxElement extends AoflElement {
  /**
   * Creates an instance of IconSharpIndeterminateCheckBoxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-indeterminate-check-box';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpIndeterminateCheckBoxElement.is, IconSharpIndeterminateCheckBoxElement);

export default IconSharpIndeterminateCheckBoxElement;
