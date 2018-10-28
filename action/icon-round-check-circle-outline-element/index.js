import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCheckCircleOutlineElement
 * @class IconRoundCheckCircleOutlineElement
 * @extends {AoflElement}
 */
class IconRoundCheckCircleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCheckCircleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-check-circle-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCheckCircleOutlineElement.is, IconRoundCheckCircleOutlineElement);

export default IconRoundCheckCircleOutlineElement;
