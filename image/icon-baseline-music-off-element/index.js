import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMusicOffElement
 * @class IconBaselineMusicOffElement
 * @extends {AoflElement}
 */
class IconBaselineMusicOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMusicOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-music-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMusicOffElement.is, IconBaselineMusicOffElement);

export default IconBaselineMusicOffElement;
