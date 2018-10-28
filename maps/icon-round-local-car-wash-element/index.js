import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalCarWashElement
 * @class IconRoundLocalCarWashElement
 * @extends {AoflElement}
 */
class IconRoundLocalCarWashElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalCarWashElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-car-wash';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalCarWashElement.is, IconRoundLocalCarWashElement);

export default IconRoundLocalCarWashElement;
