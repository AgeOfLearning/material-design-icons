import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocationDisabledElement
 * @class IconRoundLocationDisabledElement
 * @extends {AoflElement}
 */
class IconRoundLocationDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocationDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-location-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocationDisabledElement.is, IconRoundLocationDisabledElement);

export default IconRoundLocationDisabledElement;
