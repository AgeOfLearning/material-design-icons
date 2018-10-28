import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCheckCircleElement
 * @class IconRoundCheckCircleElement
 * @extends {AoflElement}
 */
class IconRoundCheckCircleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCheckCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-check-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCheckCircleElement.is, IconRoundCheckCircleElement);

export default IconRoundCheckCircleElement;
