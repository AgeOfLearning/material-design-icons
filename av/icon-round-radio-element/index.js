import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRadioElement
 * @class IconRoundRadioElement
 * @extends {AoflElement}
 */
class IconRoundRadioElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRadioElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-radio';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRadioElement.is, IconRoundRadioElement);

export default IconRoundRadioElement;
