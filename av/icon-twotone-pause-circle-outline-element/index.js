import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePauseCircleOutlineElement
 * @class IconTwotonePauseCircleOutlineElement
 * @extends {AoflElement}
 */
class IconTwotonePauseCircleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePauseCircleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-pause-circle-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePauseCircleOutlineElement.is, IconTwotonePauseCircleOutlineElement);

export default IconTwotonePauseCircleOutlineElement;
