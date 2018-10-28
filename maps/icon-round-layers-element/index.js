import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLayersElement
 * @class IconRoundLayersElement
 * @extends {AoflElement}
 */
class IconRoundLayersElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLayersElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-layers';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLayersElement.is, IconRoundLayersElement);

export default IconRoundLayersElement;
