import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePauseCircleOutlineElement
 * @class IconOutlinePauseCircleOutlineElement
 * @extends {AoflElement}
 */
class IconOutlinePauseCircleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePauseCircleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-pause-circle-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePauseCircleOutlineElement.is, IconOutlinePauseCircleOutlineElement);

export default IconOutlinePauseCircleOutlineElement;
