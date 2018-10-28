import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundIsoElement
 * @class IconRoundIsoElement
 * @extends {AoflElement}
 */
class IconRoundIsoElement extends AoflElement {
  /**
   * Creates an instance of IconRoundIsoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-iso';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundIsoElement.is, IconRoundIsoElement);

export default IconRoundIsoElement;
