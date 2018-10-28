import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPersonalVideoElement
 * @class IconRoundPersonalVideoElement
 * @extends {AoflElement}
 */
class IconRoundPersonalVideoElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPersonalVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-personal-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPersonalVideoElement.is, IconRoundPersonalVideoElement);

export default IconRoundPersonalVideoElement;
