import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundVolumeOffElement
 * @class IconRoundVolumeOffElement
 * @extends {AoflElement}
 */
class IconRoundVolumeOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundVolumeOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-volume-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundVolumeOffElement.is, IconRoundVolumeOffElement);

export default IconRoundVolumeOffElement;
