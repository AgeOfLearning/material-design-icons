import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTrainElement
 * @class IconRoundTrainElement
 * @extends {AoflElement}
 */
class IconRoundTrainElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTrainElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-train';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTrainElement.is, IconRoundTrainElement);

export default IconRoundTrainElement;
