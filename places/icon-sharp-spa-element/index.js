import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSpaElement
 * @class IconSharpSpaElement
 * @extends {AoflElement}
 */
class IconSharpSpaElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSpaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-spa';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSpaElement.is, IconSharpSpaElement);

export default IconSharpSpaElement;
