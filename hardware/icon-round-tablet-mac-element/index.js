import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTabletMacElement
 * @class IconRoundTabletMacElement
 * @extends {AoflElement}
 */
class IconRoundTabletMacElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTabletMacElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-tablet-mac';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTabletMacElement.is, IconRoundTabletMacElement);

export default IconRoundTabletMacElement;
