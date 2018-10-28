import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAddCircleElement
 * @class IconRoundAddCircleElement
 * @extends {AoflElement}
 */
class IconRoundAddCircleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAddCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-add-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAddCircleElement.is, IconRoundAddCircleElement);

export default IconRoundAddCircleElement;
