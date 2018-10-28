import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundScreenShareElement
 * @class IconRoundScreenShareElement
 * @extends {AoflElement}
 */
class IconRoundScreenShareElement extends AoflElement {
  /**
   * Creates an instance of IconRoundScreenShareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-screen-share';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundScreenShareElement.is, IconRoundScreenShareElement);

export default IconRoundScreenShareElement;
