import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundZoomOutMapElement
 * @class IconRoundZoomOutMapElement
 * @extends {AoflElement}
 */
class IconRoundZoomOutMapElement extends AoflElement {
  /**
   * Creates an instance of IconRoundZoomOutMapElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-zoom-out-map';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundZoomOutMapElement.is, IconRoundZoomOutMapElement);

export default IconRoundZoomOutMapElement;
