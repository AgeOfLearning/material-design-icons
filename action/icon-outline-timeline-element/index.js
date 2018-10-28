import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTimelineElement
 * @class IconOutlineTimelineElement
 * @extends {AoflElement}
 */
class IconOutlineTimelineElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTimelineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-timeline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTimelineElement.is, IconOutlineTimelineElement);

export default IconOutlineTimelineElement;
