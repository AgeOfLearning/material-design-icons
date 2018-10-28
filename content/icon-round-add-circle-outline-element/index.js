import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAddCircleOutlineElement
 * @class IconRoundAddCircleOutlineElement
 * @extends {AoflElement}
 */
class IconRoundAddCircleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAddCircleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-add-circle-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAddCircleOutlineElement.is, IconRoundAddCircleOutlineElement);

export default IconRoundAddCircleOutlineElement;
