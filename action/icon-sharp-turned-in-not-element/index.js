import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTurnedInNotElement
 * @class IconSharpTurnedInNotElement
 * @extends {AoflElement}
 */
class IconSharpTurnedInNotElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTurnedInNotElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-turned-in-not';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTurnedInNotElement.is, IconSharpTurnedInNotElement);

export default IconSharpTurnedInNotElement;
