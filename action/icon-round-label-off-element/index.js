import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLabelOffElement
 * @class IconRoundLabelOffElement
 * @extends {AoflElement}
 */
class IconRoundLabelOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLabelOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-label-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLabelOffElement.is, IconRoundLabelOffElement);

export default IconRoundLabelOffElement;
