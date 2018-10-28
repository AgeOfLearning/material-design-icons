import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundZoomOutElement
 * @class IconRoundZoomOutElement
 * @extends {AoflElement}
 */
class IconRoundZoomOutElement extends AoflElement {
  /**
   * Creates an instance of IconRoundZoomOutElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-zoom-out';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundZoomOutElement.is, IconRoundZoomOutElement);

export default IconRoundZoomOutElement;
