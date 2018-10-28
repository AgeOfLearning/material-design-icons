import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpWhatshotElement
 * @class IconSharpWhatshotElement
 * @extends {AoflElement}
 */
class IconSharpWhatshotElement extends AoflElement {
  /**
   * Creates an instance of IconSharpWhatshotElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-whatshot';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpWhatshotElement.is, IconSharpWhatshotElement);

export default IconSharpWhatshotElement;
