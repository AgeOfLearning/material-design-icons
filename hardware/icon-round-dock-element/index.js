import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDockElement
 * @class IconRoundDockElement
 * @extends {AoflElement}
 */
class IconRoundDockElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-dock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDockElement.is, IconRoundDockElement);

export default IconRoundDockElement;
