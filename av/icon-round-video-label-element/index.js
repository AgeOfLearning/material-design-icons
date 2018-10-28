import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundVideoLabelElement
 * @class IconRoundVideoLabelElement
 * @extends {AoflElement}
 */
class IconRoundVideoLabelElement extends AoflElement {
  /**
   * Creates an instance of IconRoundVideoLabelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-video-label';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundVideoLabelElement.is, IconRoundVideoLabelElement);

export default IconRoundVideoLabelElement;
