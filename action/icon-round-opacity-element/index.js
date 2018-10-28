import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundOpacityElement
 * @class IconRoundOpacityElement
 * @extends {AoflElement}
 */
class IconRoundOpacityElement extends AoflElement {
  /**
   * Creates an instance of IconRoundOpacityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-opacity';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundOpacityElement.is, IconRoundOpacityElement);

export default IconRoundOpacityElement;
