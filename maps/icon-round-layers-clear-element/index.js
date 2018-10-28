import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLayersClearElement
 * @class IconRoundLayersClearElement
 * @extends {AoflElement}
 */
class IconRoundLayersClearElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLayersClearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-layers-clear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLayersClearElement.is, IconRoundLayersClearElement);

export default IconRoundLayersClearElement;
