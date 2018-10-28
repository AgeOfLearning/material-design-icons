import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMusicOffElement
 * @class IconTwotoneMusicOffElement
 * @extends {AoflElement}
 */
class IconTwotoneMusicOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMusicOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-music-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMusicOffElement.is, IconTwotoneMusicOffElement);

export default IconTwotoneMusicOffElement;
