import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundWbSunnyElement
 * @class IconRoundWbSunnyElement
 * @extends {AoflElement}
 */
class IconRoundWbSunnyElement extends AoflElement {
  /**
   * Creates an instance of IconRoundWbSunnyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-wb-sunny';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundWbSunnyElement.is, IconRoundWbSunnyElement);

export default IconRoundWbSunnyElement;
