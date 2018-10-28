import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundVolumeUpElement
 * @class IconRoundVolumeUpElement
 * @extends {AoflElement}
 */
class IconRoundVolumeUpElement extends AoflElement {
  /**
   * Creates an instance of IconRoundVolumeUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-volume-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundVolumeUpElement.is, IconRoundVolumeUpElement);

export default IconRoundVolumeUpElement;
