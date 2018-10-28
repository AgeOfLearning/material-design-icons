import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTurnedInElement
 * @class IconSharpTurnedInElement
 * @extends {AoflElement}
 */
class IconSharpTurnedInElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTurnedInElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-turned-in';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTurnedInElement.is, IconSharpTurnedInElement);

export default IconSharpTurnedInElement;
