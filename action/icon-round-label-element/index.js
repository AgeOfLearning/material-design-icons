import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLabelElement
 * @class IconRoundLabelElement
 * @extends {AoflElement}
 */
class IconRoundLabelElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLabelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-label';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLabelElement.is, IconRoundLabelElement);

export default IconRoundLabelElement;
