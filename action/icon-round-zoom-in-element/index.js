import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundZoomInElement
 * @class IconRoundZoomInElement
 * @extends {AoflElement}
 */
class IconRoundZoomInElement extends AoflElement {
  /**
   * Creates an instance of IconRoundZoomInElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-zoom-in';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundZoomInElement.is, IconRoundZoomInElement);

export default IconRoundZoomInElement;
