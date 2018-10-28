import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSdStorageElement
 * @class IconRoundSdStorageElement
 * @extends {AoflElement}
 */
class IconRoundSdStorageElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSdStorageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-sd-storage';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSdStorageElement.is, IconRoundSdStorageElement);

export default IconRoundSdStorageElement;
