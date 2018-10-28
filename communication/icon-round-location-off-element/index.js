import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocationOffElement
 * @class IconRoundLocationOffElement
 * @extends {AoflElement}
 */
class IconRoundLocationOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocationOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-location-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocationOffElement.is, IconRoundLocationOffElement);

export default IconRoundLocationOffElement;
