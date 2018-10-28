import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPhotoCameraElement
 * @class IconRoundPhotoCameraElement
 * @extends {AoflElement}
 */
class IconRoundPhotoCameraElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPhotoCameraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-photo-camera';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPhotoCameraElement.is, IconRoundPhotoCameraElement);

export default IconRoundPhotoCameraElement;
