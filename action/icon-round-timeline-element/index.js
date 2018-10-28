import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTimelineElement
 * @class IconRoundTimelineElement
 * @extends {AoflElement}
 */
class IconRoundTimelineElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTimelineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-timeline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTimelineElement.is, IconRoundTimelineElement);

export default IconRoundTimelineElement;
