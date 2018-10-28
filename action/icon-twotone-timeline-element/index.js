import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTimelineElement
 * @class IconTwotoneTimelineElement
 * @extends {AoflElement}
 */
class IconTwotoneTimelineElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTimelineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-timeline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTimelineElement.is, IconTwotoneTimelineElement);

export default IconTwotoneTimelineElement;
