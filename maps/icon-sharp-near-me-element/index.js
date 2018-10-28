import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNearMeElement
 * @class IconSharpNearMeElement
 * @extends {AoflElement}
 */
class IconSharpNearMeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNearMeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-near-me';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNearMeElement.is, IconSharpNearMeElement);

export default IconSharpNearMeElement;
